import Link from './../Link';
import styles from './LogoStyles';

export default () => (
  <Link href="/">
    <div
      className="logo"
      data-testid="logo"
    >
      <div>
        <svg
          className="logo-svg"
          height="36"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          viewBox="0 0 36 36"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="none"
            transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
          >
            <path
              d="M103 317 c-18 -23 -48 -60 -67 -82 -38 -43 -41 -50 -26 -60 6 -3 10
                -42 10 -86 0 -89 5 -96 61 -81 33 8 34 10 34 60 0 94 48 92 90 -4 19 -43 29
                -54 42 -51 10 3 35 8 57 12 l38 6 -6 85 c-6 71 -4 84 9 84 8 0 15 4 15 8 0 9
                -55 52 -65 52 -4 0 -39 23 -79 50 -40 28 -74 50 -77 50 -2 0 -18 -20 -36 -43z
                m119 -47 c79 -55 85 -68 87 -177 1 -43 1 -43 -34 -43 -32 0 -37 4 -51 40 -18
                45 -73 85 -103 75 -24 -7 -45 -67 -37 -101 4 -13 4 -24 2 -24 -2 0 -11 -3 -20
                -6 -14 -5 -16 6 -16 81 0 73 4 92 22 118 20 30 69 87 74 87 1 0 35 -23 76 -50z"
            />
          </g>
        </svg>
      </div>
      <span className="logo-text">{'FlatWice'}</span>
      <style jsx>{styles}</style>
    </div>
  </Link>
);
