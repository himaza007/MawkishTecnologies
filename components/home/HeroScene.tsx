"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Immersive WebGL background: a layered 3D network — an inner wireframe
 * core, an outer wireframe shell, and a particle field of nodes — all
 * rotating slowly and drifting toward the pointer. Represents the brand
 * idea of interconnected enterprise systems (SAP / Salesforce / Odoo / AI)
 * resolving into one coherent structure.
 */
export function HeroScene({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // No WebGL available — the CSS gradient backdrop still holds the hero.
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020604, 0.055);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const mint = new THREE.Color("#7fd9b4");
    const jade = new THREE.Color("#1c6b51");

    // Root rig — everything nested here parallaxes gently toward the pointer.
    const rig = new THREE.Group();
    scene.add(rig);

    // Inner wireframe core (icosahedron edges).
    const coreGeo = new THREE.IcosahedronGeometry(1.55, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const core = new THREE.LineSegments(
      coreEdges,
      new THREE.LineBasicMaterial({ color: mint, transparent: true, opacity: 0.55 })
    );
    rig.add(core);

    // Outer wireframe shell, larger + dimmer, counter-rotating.
    const outerGeo = new THREE.IcosahedronGeometry(2.9, 1);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outer = new THREE.LineSegments(
      outerEdges,
      new THREE.LineBasicMaterial({ color: jade, transparent: true, opacity: 0.4 })
    );
    rig.add(outer);

    // Particle field — nodes scattered in a shell around the core.
    const NODE_COUNT = 460;
    const positions = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      const radius = 3.4 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: mint,
        size: 0.045,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    rig.add(particles);

    // Sparse "data link" lines from a handful of nodes back toward the core —
    // reinforces the idea of disparate systems resolving into one network.
    const LINKS = 22;
    const linkPositions = new Float32Array(LINKS * 2 * 3);
    for (let i = 0; i < LINKS; i++) {
      const idx = Math.floor(Math.random() * NODE_COUNT) * 3;
      linkPositions[i * 6] = positions[idx];
      linkPositions[i * 6 + 1] = positions[idx + 1];
      linkPositions[i * 6 + 2] = positions[idx + 2];
      linkPositions[i * 6 + 3] = 0;
      linkPositions[i * 6 + 4] = 0;
      linkPositions[i * 6 + 5] = 0;
    }
    const linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute("position", new THREE.BufferAttribute(linkPositions, 3));
    const links = new THREE.LineSegments(
      linkGeo,
      new THREE.LineBasicMaterial({ color: mint, transparent: true, opacity: 0.1 })
    );
    rig.add(links);

    // Pointer parallax.
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const dt = clock.getDelta();

      if (!reduceMotion) {
        core.rotation.y += dt * 0.12;
        core.rotation.x += dt * 0.05;
        outer.rotation.y -= dt * 0.05;
        outer.rotation.x -= dt * 0.02;
        particles.rotation.y += dt * 0.03;
        links.rotation.y += dt * 0.03;

        pointer.x += (target.x - pointer.x) * 0.04;
        pointer.y += (target.y - pointer.y) * 0.04;
        rig.rotation.y = pointer.x * 0.25;
        rig.rotation.x = -pointer.y * 0.15;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      coreGeo.dispose();
      coreEdges.dispose();
      outerGeo.dispose();
      outerEdges.dispose();
      particleGeo.dispose();
      linkGeo.dispose();
      (core.material as THREE.Material).dispose();
      (outer.material as THREE.Material).dispose();
      (particles.material as THREE.Material).dispose();
      (links.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className={className} />;
}
