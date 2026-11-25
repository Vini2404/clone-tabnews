const NOME = "Gabiblue amor da minha vida"; // 👈 troque pelo nome da pessoa

function Flor() {
  const petalas = Array.from({ length: 12 });

  return (
    <svg viewBox="0 0 300 420" className="flor" aria-label="Flor">
      <defs>
        <radialGradient id="gradPetala" cx="50%" cy="85%" r="80%">
          <stop offset="0%" stopColor="#ffd1e3" />
          <stop offset="60%" stopColor="#ff6fa5" />
          <stop offset="100%" stopColor="#e0336f" />
        </radialGradient>
        <radialGradient id="gradMiolo" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="100%" stopColor="#f5a623" />
        </radialGradient>
      </defs>

      {/* Caule */}
      <path
        d="M150 190 C 140 260, 165 320, 150 410"
        stroke="#3f9b4a"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Folhas */}
      <path d="M152 300 C 190 270, 230 280, 245 260 C 230 310, 190 320, 152 310 Z" fill="#4caf50" className="folha folha-dir" />
      <path d="M148 350 C 110 320, 70 330, 55 310 C 70 360, 110 370, 148 360 Z" fill="#43a047" className="folha folha-esq" />

      {/* Pétalas */}
      <g className="petalas">
        {petalas.map((_, i) => (
          <ellipse
            key={i}
            cx="150"
            cy="110"
            rx="26"
            ry="62"
            fill="url(#gradPetala)"
            transform={`rotate(${(360 / petalas.length) * i} 150 170)`}
            style={{ animationDelay: `${i * 0.08}s` }}
            className="petala"
          />
        ))}
      </g>

      {/* Miolo */}
      <circle cx="150" cy="170" r="32" fill="url(#gradMiolo)" />
      <text x="150" y="182" textAnchor="middle" fontSize="30">❤</text>
    </svg>
  );
}

function Home() {
  return (
    <main className="home">
      <style>{`
        .home {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: linear-gradient(180deg, #fff0f5 0%, #ffd6e7 100%);
          font-family: "Georgia", serif;
          text-align: center;
          padding: 2rem;
          overflow: hidden;
        }
        .home h1 {
          font-size: clamp(2.2rem, 7vw, 4.5rem);
          color: #c2185b;
          margin: 0;
          animation: aparecer 1.2s ease-out both;
        }
        .home h1 span { color: #e91e63; font-style: italic; }
        .home p {
          color: #ad1457;
          font-size: 1.2rem;
          margin: 0;
          animation: aparecer 1.2s ease-out 0.4s both;
        }
        .flor {
          width: min(80vw, 380px);
          height: auto;
          margin-top: 1rem;
          animation: balancar 4s ease-in-out infinite;
          transform-origin: 50% 100%;
        }
        .petala {
          transform-box: fill-box;
          animation: desabrochar 1s ease-out both;
        }
        .folha { transform-box: fill-box; animation: aparecer 1s ease-out 0.6s both; }

        @keyframes aparecer {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes desabrochar {
          from { opacity: 0; }
          to   { opacity: 0.95; }
        }
        @keyframes balancar {
          0%, 100% { transform: rotate(-2deg); }
          50%      { transform: rotate(2deg); }
        }
      `}</style>

      <h1>
        Te amo, <span>{NOME}</span> ❤
      </h1>
      <p>Uma flor só pra você 🌷</p>

      <Flor />
    </main>
  );
}

export default Home;