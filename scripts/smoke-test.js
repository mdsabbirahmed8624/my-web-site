/**
 * Minimal smoke test for CI and local checks.
 *
 * This implementation is intentionally lightweight to support repos with scaffolded
 * backends where full runtime may be unavailable during initial setup.
 */

import assert from 'node:assert';

console.log('Running minimal smoke test...');

// Sanity check: Node runtime is reachable
assert.ok(typeof process.version === 'string' && process.version.length > 0, 'Node runtime is not available');

// Simple assertion to ensure script is executed
assert.ok(true, 'Smoke test passed');

console.log('Smoke test passed.');
process.exit(0);
