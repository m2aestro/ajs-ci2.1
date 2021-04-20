/* eslint-disable no-undef */
import healthLevel from './app';

test.each([
  ['critical', 10],
  ['wounded', 15],
  ['wounded', 20],
  ['wounded', 50],
  ['healthy', 55],
])(
  ('check health level'), (expected, health) => {
    const result = healthLevel({ name: 'Wizard', health });
    expect(result).toBe(expected);
  },
);
