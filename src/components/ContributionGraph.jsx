import { useMemo } from 'react'

// Deterministic pseudo-random generator so the graph looks the same on every load
// instead of reshuffling (a real GitHub graph doesn't change on refresh either).
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function ContributionGraph({ weeks = 30 }) {
  const grid = useMemo(() => {
    const rand = mulberry32(1337)
    const cols = []
    for (let w = 0; w < weeks; w++) {
      const col = []
      for (let d = 0; d < 7; d++) {
        const r = rand()
        // Bias toward more activity in recent weeks, like a real active profile.
        const recency = w / weeks
        const boosted = r + recency * 0.3
        let level = 0
        if (boosted > 0.85) level = 4
        else if (boosted > 0.68) level = 3
        else if (boosted > 0.5) level = 2
        else if (boosted > 0.32) level = 1
        col.push(level)
      }
      cols.push(col)
    }
    return cols
  }, [weeks])

  return (
    <div>
      <div className="graph-wrap" aria-hidden="true">
        {grid.map((col, wi) => (
          <div className="graph-col" key={wi}>
            {col.map((level, di) => (
              <div
                key={di}
                className={`graph-cell ${level > 0 ? `l${level}` : ''}`}
                style={{ animationDelay: `${(wi * 7 + di) * 4}ms` }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="graph-caption">
        <span>less</span>
        <span>building, consistently</span>
        <span>more</span>
      </div>
    </div>
  )
}
