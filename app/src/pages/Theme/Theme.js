import Particles from "./components/particles";

function theme() {
	function click(theme) {
	
		switch (theme) {
			case 'wildcat':
				localStorage.setItem('theme', 'wildcat');
				window.location.reload();
				break;
			case 'chief':
				localStorage.setItem('theme', 'chief');
				window.location.reload();
				break;
			case 'shocker':
				localStorage.setItem('theme', 'shocker');
				window.location.reload();
				break;

				case 'jayhawk':
					localStorage.setItem('theme', 'jayhawk');
					window.location.reload();
					break;	




            default:
                localStorage.setItem('theme', 'jayhawk');
				window.location.reload();
				break;

		}


	}

	return (
		<div

			style={{ height: '100vh' }}
			className="container-fluid"
		>

        <div  className="row">
            <div className="col p-2">
                <h1 className="text-center text-light">Select a Theme</h1>
            </div>
        </div>


			<div style={{ height: '100vh' }} className="row d-flex justify-content-center align-items-center">
				<div 			onClick={() => {
				click('wildcat');
			}} className="col-12 col-md-3 d-flex justify-content-center logo">
					<svg

						className="wildcat-svg"
						style={{ width: '100%', maxWidth: '250px' }}
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						width="450.000000pt"
						height="450.000000pt"
						viewBox="0 0 300.000000 223.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,223.000000) scale(0.100000,-0.100000)"
							fill="rgb(102,16,242)"
							stroke="none"
						>
							<path d="M1188 2154 c-16 -212 -182 -330 -417 -295 -137 21 -335 139 -411 245 -14 20 -29 36 -34 36 -5 0 -78 -23 -162 -51 l-154 -51 0 -653 c0 -359 -3 -660 -6 -669 -12 -32 13 -12 72 57 147 174 403 346 627 423 265 91 548 115 848 74 154 -20 312 -56 399 -89 l54 -20 14 22 c30 44 112 117 161 141 92 47 181 43 283 -12 70 -37 92 -88 85 -193 -5 -75 -4 -78 14 -68 24 12 71 76 89 120 14 33 16 33 93 14 23 -6 31 1 75 61 84 113 172 312 172 386 0 100 -503 325 -872 388 -38 7 -66 16 -63 20 3 5 44 8 91 7 47 -1 88 1 90 5 7 10 -194 85 -302 112 -167 42 -220 48 -485 53 l-256 5 -5 -68z m532 12 c112 -18 292 -61 322 -77 15 -8 16 -13 6 -35 -11 -23 -10 -29 9 -43 11 -10 88 -35 169 -56 267 -68 469 -146 619 -240 104 -64 112 -75 97 -133 -17 -64 -92 -218 -142 -293 l-42 -61 -45 5 c-40 4 -50 0 -80 -26 -18 -16 -35 -28 -37 -26 -1 2 -11 26 -20 52 -37 100 -140 161 -271 161 -93 0 -165 -33 -249 -114 -34 -33 -69 -60 -77 -60 -8 0 -59 13 -115 29 -250 72 -591 100 -827 67 -360 -51 -650 -187 -893 -418 -50 -48 -94 -85 -98 -81 -8 8 -8 1156 0 1177 4 10 56 32 136 58 l129 41 62 -60 c85 -82 131 -115 216 -158 197 -99 418 -80 540 46 51 53 78 107 95 190 9 45 18 65 32 70 32 13 353 2 464 -15z" />
							<path d="M380 2202 c0 -17 147 -161 200 -196 86 -56 159 -78 270 -79 71 -1 105 3 135 16 83 37 129 105 141 210 l7 57 -377 0 c-207 0 -376 -4 -376 -8z m689 -41 c33 -21 -14 -128 -73 -166 -71 -46 -227 -37 -342 20 -82 40 -182 124 -170 143 9 14 563 17 585 3z" />
							<path d="M1025 1180 c-158 -25 -253 -50 -348 -94 -235 -107 -377 -268 -407 -461 -20 -128 5 -226 91 -352 82 -120 236 -225 367 -252 109 -22 382 -8 382 20 0 5 -4 9 -9 9 -15 0 -108 145 -129 202 -74 197 -28 406 122 567 154 164 421 232 727 186 56 -9 105 -18 110 -21 5 -3 9 6 9 20 0 14 7 44 16 66 9 23 15 42 13 44 -13 9 -262 59 -358 71 -160 21 -434 18 -586 -5z m672 -50 c170 -29 208 -41 208 -65 0 -17 -6 -20 -40 -17 -22 1 -119 3 -215 4 -203 2 -276 -13 -419 -83 -320 -158 -430 -564 -231 -855 21 -30 29 -49 22 -56 -5 -5 -38 -14 -73 -20 -130 -22 -346 49 -462 153 -58 51 -133 155 -160 222 -59 141 -8 342 119 470 142 143 357 229 664 267 127 15 448 4 587 -20z" />
							<path d="M1574 912 c-85 -26 -139 -60 -211 -134 -147 -154 -147 -318 2 -523 42 -58 55 -67 55 -36 0 31 75 105 142 142 56 30 72 34 138 34 64 0 83 -4 128 -29 50 -28 117 -90 139 -130 9 -17 14 -17 49 -6 123 40 268 152 416 323 l51 58 -41 39 c-41 39 -41 39 -27 73 23 55 36 124 27 147 -8 20 -10 19 -37 -20 -51 -73 -119 -117 -217 -140 -47 -11 -66 -11 -100 -1 -56 17 -121 85 -145 150 -10 28 -24 54 -33 57 -8 4 -73 8 -145 10 -104 3 -142 0 -191 -14z m271 -30 c34 -6 44 -14 65 -53 42 -78 77 -116 132 -143 28 -14 68 -26 87 -26 52 0 135 24 186 54 58 34 61 34 57 -3 -2 -21 5 -41 23 -66 27 -34 27 -35 9 -62 -57 -88 -270 -264 -360 -299 l-44 -17 -69 66 c-88 83 -156 111 -249 104 -77 -6 -172 -50 -231 -107 -23 -22 -47 -40 -54 -40 -20 0 -75 102 -93 170 -28 110 1 203 90 295 65 66 128 102 208 120 69 15 180 18 243 7z" />
						</g>
					</svg>
				</div>
				<div
					onClick={() => {
						click('chief');
					}}
					className="col-12 col-md-3 d-flex justify-content-center logo"
				>
					<svg
						className="chief-svg"
						style={{ width: '100%', maxWidth: '250px' }}
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						width="450.000000pt"
						height="450.000000pt"
						viewBox="0 0 262.000000 167.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,167.000000) scale(0.100000,-0.100000)"
							fill="red"
							stroke="none"
						>
							<path d="M456 1647 c-26 -19 -23 -69 9 -197 28 -110 30 -141 13 -158 -21 -21 -72 -14 -98 13 -29 31 -65 32 -125 3 -45 -22 -46 -22 -79 -4 -45 24 -78 18 -95 -18 -12 -25 -11 -36 3 -81 23 -74 20 -98 -19 -186 -46 -101 -61 -212 -46 -338 6 -49 17 -106 25 -127 9 -26 12 -65 8 -115 -4 -73 -3 -78 20 -93 25 -17 60 -12 109 15 14 7 50 12 87 10 34 -1 80 4 102 10 31 9 43 9 55 -1 22 -18 19 -51 -15 -175 -36 -133 -36 -146 -7 -173 27 -25 50 -27 162 -9 45 7 102 10 130 6 106 -15 184 -10 248 15 91 35 103 38 181 40 61 1 83 7 146 39 56 27 97 40 160 49 49 6 105 21 134 35 26 14 76 29 109 34 47 8 72 19 104 45 28 23 72 45 122 60 50 15 108 43 160 78 50 34 97 57 124 61 42 7 67 28 169 143 16 18 55 41 96 56 93 36 162 108 162 169 0 29 -53 80 -166 160 -43 31 -90 72 -103 92 -27 41 -59 60 -115 71 -28 5 -58 24 -106 68 -55 51 -78 65 -131 80 -35 9 -92 35 -126 58 -57 37 -69 40 -159 48 -83 7 -103 13 -148 40 -44 28 -64 33 -142 39 -81 7 -96 11 -153 46 -61 38 -68 40 -175 46 -74 4 -124 13 -151 25 -32 14 -66 18 -165 19 -69 1 -163 5 -210 9 -68 6 -89 5 -104 -7z m201 -62 c43 -8 110 -15 148 -15 51 0 82 -6 115 -22 37 -18 63 -22 155 -22 l110 -1 79 -44 c70 -38 89 -44 165 -50 72 -6 97 -14 155 -44 38 -20 83 -37 100 -37 52 0 96 -17 151 -60 44 -34 65 -43 136 -55 46 -8 86 -15 88 -15 3 0 32 -29 66 -64 51 -53 71 -66 120 -80 57 -17 88 -41 128 -100 10 -14 36 -35 58 -46 60 -31 119 -88 119 -116 0 -27 -19 -39 -93 -61 -63 -18 -95 -39 -167 -109 -32 -31 -80 -64 -115 -79 -33 -15 -86 -47 -118 -71 -32 -24 -77 -48 -100 -54 -88 -23 -131 -41 -180 -76 -35 -26 -73 -42 -116 -51 -36 -7 -72 -20 -81 -27 -22 -20 -75 -35 -163 -46 -59 -7 -94 -18 -142 -46 -55 -30 -79 -37 -157 -44 -51 -5 -125 -20 -164 -34 -66 -23 -82 -25 -185 -20 -84 4 -131 2 -178 -9 -121 -30 -143 2 -110 161 18 88 20 111 10 144 -18 59 -68 72 -157 42 -33 -11 -49 -13 -57 -5 -14 14 -92 14 -118 0 -36 -19 -47 4 -52 104 -2 51 -12 126 -21 167 -22 95 -12 160 40 262 31 62 37 86 41 158 7 106 17 119 87 119 28 0 62 0 76 1 14 1 55 -2 92 -6 65 -6 68 -6 97 24 27 26 31 38 31 84 0 29 -7 78 -15 108 -19 72 -19 109 2 132 20 22 21 22 120 3z m1303 -302 c2 -2 -8 -2 -24 1 -26 5 -76 31 -76 41 0 4 91 -34 100 -42z m-1807 -48 c-22 -30 -30 -31 -38 -5 -9 30 12 52 36 39 19 -9 19 -11 2 -34z m305 -1166 c7 -12 12 -23 10 -25 -6 -6 -48 26 -48 37 0 17 25 9 38 -12z" />
							<path d="M652 1262 c-6 -17 4 -26 31 -27 22 0 22 0 22 -220 l0 -220 -25 0 c-20 0 -26 -6 -28 -28 l-3 -27 146 0 146 0 -3 28 c-2 19 -9 27 -23 27 -16 0 -21 8 -23 36 l-3 37 117 71 c64 39 120 71 124 71 11 0 196 -201 192 -209 -1 -3 -9 -6 -17 -6 -8 0 -15 -4 -15 -8 -1 -51 -12 -47 149 -47 l150 0 -3 25 c-2 16 -43 68 -112 142 -61 65 -127 136 -147 159 l-37 41 111 68 c91 54 117 66 140 61 25 -5 29 -2 29 17 0 22 -1 22 -147 20 -126 -1 -148 -4 -151 -17 -2 -11 4 -16 17 -16 12 0 21 -4 21 -9 0 -4 -80 -52 -177 -106 -98 -54 -190 -107 -205 -117 -14 -10 -29 -18 -32 -18 -4 0 -5 55 -4 123 3 114 4 122 23 122 13 0 20 7 20 19 0 17 -11 18 -139 20 -105 1 -140 -2 -144 -12z m182 -28 c13 -5 16 -24 16 -99 0 -98 10 -142 37 -162 21 -16 58 0 239 103 81 46 152 84 156 84 5 0 2 -13 -8 -29 -16 -27 -16 -29 7 -63 13 -19 71 -86 129 -147 58 -62 106 -119 108 -127 3 -11 -13 -14 -75 -14 l-79 0 -12 33 c-7 19 -54 77 -105 130 -114 120 -118 121 -244 42 -48 -31 -98 -64 -111 -75 -30 -27 -44 -67 -37 -102 l7 -28 -60 0 -59 0 -2 199 c-1 110 1 211 5 225 7 30 49 45 88 30z m566 -8 c0 -1 -22 -17 -50 -34 -27 -17 -50 -27 -50 -22 0 6 4 10 8 10 5 0 15 11 22 25 9 18 22 25 42 25 15 0 28 -2 28 -4z" />
							<path d="M1423 1063 c-18 -2 -33 -7 -33 -9 0 -3 14 -22 32 -43 29 -36 34 -38 67 -30 128 30 302 -15 382 -98 24 -24 42 -33 66 -33 l33 0 0 100 0 100 -34 0 c-18 0 -45 -9 -58 -20 -23 -18 -28 -18 -54 -5 -62 31 -148 45 -259 43 -60 0 -125 -3 -142 -5z m507 -114 c0 -27 -4 -49 -9 -49 -6 0 -31 18 -56 40 -41 35 -44 40 -23 40 13 1 34 7 48 14 34 19 40 13 40 -45z" />
							<path d="M1092 888 c-44 -46 -62 -97 -62 -173 0 -146 98 -232 310 -271 208 -37 424 6 536 108 61 56 104 125 82 133 -30 9 -55 -2 -97 -44 -73 -73 -188 -111 -338 -111 -118 0 -182 14 -240 53 -90 60 -120 136 -84 209 l21 43 -42 42 c-23 24 -45 43 -48 43 -3 0 -20 -15 -38 -32z m66 -45 c5 -10 6 -27 1 -38 -11 -28 -11 -109 1 -139 15 -40 84 -109 133 -134 57 -28 130 -42 231 -43 66 0 76 -2 56 -11 -15 -6 -69 -8 -135 -5 -232 11 -369 94 -380 229 -7 94 63 200 93 141z" />
						</g>
					</svg>
				</div>

				<div
					onClick={() => {
						click('shocker');
					}}
					className="col-12 col-md-3 d-flex justify-content-center logo "
				>
					<svg
						className="shocker-svg"
						style={{ width: '100%', maxWidth: '250px' }}
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						width="300.000000pt"
						height="189.000000pt"
						viewBox="0 0 300.000000 189.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						
						<g
							transform="translate(0.000000,189.000000) scale(0.100000,-0.100000)"
							fill="#f6c506"
							stroke="none"
						>
							<path d="M1727 1839 c-91 -20 -189 -90 -233 -165 l-26 -44 -91 0 c-256 -1 -533 -49 -721 -123 -149 -60 -232 -113 -343 -223 -57 -56 -103 -107 -103 -113 0 -8 50 -11 160 -11 l160 0 73 36 c101 52 309 118 460 147 71 14 132 29 135 33 9 9 -262 -3 -352 -16 -155 -23 -324 -75 -371 -116 -32 -27 -27 -30 18 -10 72 30 279 87 316 86 10 -1 -50 -27 -110 -49 -31 -11 -60 -17 -64 -13 -5 4 -5 1 -1 -5 4 -8 1 -13 -7 -13 -8 0 -35 -11 -58 -25 -41 -24 -52 -25 -171 -24 -71 1 -128 5 -128 9 0 11 111 117 150 144 90 60 134 85 207 115 128 54 179 71 211 71 12 0 22 4 22 9 0 5 17 11 38 14 134 20 307 37 430 43 158 8 151 5 215 93 59 81 153 119 302 123 67 1 87 -2 97 -17 4 -5 8 5 8 23 l0 33 -92 -2 c-51 -1 -110 -6 -131 -10z" />
							<path d="M2060 1843 c-61 -17 -100 -37 -100 -50 0 -9 6 -13 14 -10 77 30 220 42 258 23 23 -12 24 -11 26 16 l2 29 -92 -2 c-51 -1 -100 -4 -108 -6z" />
							<path d="M2336 1832 c-27 -9 -56 -27 -63 -39 l-15 -22 59 21 c53 19 80 21 320 22 145 1 263 -2 263 -6 0 -21 -112 -36 -282 -38 -20 0 -39 -14 -74 -55 -26 -31 -44 -58 -41 -61 10 -10 43 15 68 50 l24 36 116 0 c64 0 131 3 148 6 38 8 91 57 91 85 0 19 -9 20 -282 19 -237 -1 -291 -4 -332 -18z" />
							<path d="M1738 1773 c-16 -2 -28 -9 -28 -14 0 -5 -5 -9 -11 -9 -7 0 -31 -16 -54 -35 -44 -36 -62 -70 -42 -82 7 -3 9 -3 5 1 -8 10 56 68 99 90 18 9 55 19 84 24 29 4 53 12 53 17 1 11 -61 15 -106 8z" />
							<path d="M2056 1773 c-58 -15 -146 -89 -146 -122 0 -41 11 -51 56 -51 73 0 158 45 203 109 19 27 20 29 4 35 -10 4 -15 4 -11 1 7 -7 -66 -76 -99 -94 -12 -6 -49 -15 -82 -19 -72 -10 -79 2 -28 48 43 40 84 58 147 67 29 5 54 13 54 18 1 11 -67 16 -98 8z" />
							<path d="M2370 1774 c-67 -24 -150 -86 -150 -112 0 -19 9 -15 57 27 42 37 77 51 166 63 10 2 19 8 20 13 2 11 -68 17 -93 9z" />
							<path d="M1860 1733 c-8 -3 -31 -20 -50 -39 -40 -38 -76 -54 -143 -63 -56 -7 -67 -25 -18 -29 75 -7 160 37 211 108 12 17 20 30 18 29 -2 0 -10 -3 -18 -6z" />
							<path d="M2475 1730 c-11 -4 -31 -20 -45 -35 -35 -38 -72 -55 -137 -63 -74 -9 -84 -32 -14 -32 79 0 148 41 210 123 15 19 14 19 -14 7z" />
							<path d="M2517 1623 c-20 -19 8 -23 163 -23 94 0 170 -3 170 -6 0 -3 -6 -12 -14 -20 -11 -11 -49 -14 -170 -14 -143 0 -191 -8 -133 -24 44 -12 291 -6 315 8 22 12 62 62 62 79 0 9 -384 10 -393 0z" />
							<path d="M1145 1545 c-163 -19 -314 -52 -390 -85 -72 -31 -144 -64 -170 -78 -45 -24 -144 -96 -145 -104 0 -11 38 -10 42 0 4 11 141 94 198 120 141 64 337 106 570 121 91 7 180 13 197 16 30 3 34 0 52 -38 24 -54 81 -108 151 -143 48 -25 70 -29 178 -34 68 -3 125 -3 127 0 2 3 0 11 -4 18 -5 8 -45 13 -122 15 -96 2 -122 6 -164 27 -53 25 -117 85 -150 141 l-20 34 -120 1 c-66 1 -169 -4 -230 -11z" />
							<path d="M1610 1539 c-8 -11 -14 -26 -12 -32 22 -78 187 -146 246 -102 18 14 15 15 -37 15 -32 0 -72 6 -91 14 -35 15 -106 73 -106 87 0 17 95 9 140 -12 25 -11 60 -34 77 -51 42 -40 56 -28 17 13 -54 58 -113 89 -169 89 -40 0 -54 -4 -65 -21z" />
							<path d="M1925 1550 c3 -5 1 -10 -4 -10 -6 0 -11 -9 -11 -21 0 -79 181 -163 246 -114 17 13 14 14 -39 15 -32 0 -72 6 -91 14 -35 15 -106 73 -106 87 0 13 76 11 122 -3 22 -6 59 -29 83 -50 44 -38 55 -45 55 -30 0 21 -59 76 -105 98 -53 25 -163 35 -150 14z" />
							<path d="M2233 1545 c-18 -20 -18 -20 36 -17 58 4 135 -26 177 -69 28 -29 44 -37 44 -20 0 16 -72 82 -111 102 -45 23 -128 25 -146 4z" />
							<path d="M2220 1504 c0 -21 49 -67 95 -88 60 -29 120 -33 149 -11 18 14 15 15 -37 15 -68 0 -110 16 -159 59 -35 30 -48 37 -48 25z" />
							<path d="M2500 1503 c0 -5 22 -32 49 -60 l49 -53 69 -2 c37 0 85 -1 106 -1 20 0 37 -3 37 -8 0 -24 -51 -30 -242 -29 -172 1 -209 4 -252 21 -27 10 -52 16 -55 14 -2 -3 1 -5 7 -5 7 0 12 -6 12 -14 0 -8 18 -21 40 -30 33 -13 81 -16 250 -16 226 0 252 5 276 51 25 50 23 51 -117 48 -120 -2 -132 -1 -142 17 -24 47 -87 95 -87 67z" />
							<path d="M1955 1380 c3 -4 2 -10 -2 -13 -5 -2 -3 -2 4 -1 6 2 13 -3 16 -10 3 -7 22 -17 43 -24 41 -12 237 -19 242 -8 1 3 2 15 2 26 0 17 -3 19 -19 10 -34 -17 -172 -12 -235 10 -31 10 -54 15 -51 10z" />
							<path d="M1353 1332 c-132 -47 -205 -152 -205 -294 0 -102 24 -135 264 -350 135 -121 165 -206 117 -333 -40 -106 -116 -165 -214 -165 -136 0 -228 146 -144 229 25 25 39 31 74 31 37 0 50 -6 93 -45 l50 -45 10 47 c28 133 34 175 26 182 -18 16 -108 41 -149 41 -65 0 -133 -28 -183 -76 -25 -24 -49 -44 -53 -44 -4 0 -11 19 -14 43 -5 31 6 99 40 257 25 118 44 224 40 237 -3 12 -15 32 -27 43 -20 19 -33 20 -138 18 l-115 -3 -5 -30 c-5 -26 -1 -33 30 -50 27 -16 36 -28 38 -53 4 -36 -50 -300 -75 -370 -28 -80 -111 -92 -132 -18 -5 20 -8 43 -5 53 92 428 92 422 42 457 -18 13 -51 16 -150 16 -120 0 -128 -1 -128 -19 0 -11 -3 -26 -6 -35 -4 -10 5 -19 30 -30 24 -10 37 -23 42 -41 7 -29 -60 -361 -82 -406 -7 -14 -27 -32 -43 -39 -26 -10 -35 -10 -55 4 -43 28 -42 66 7 287 47 214 48 247 7 269 -10 6 -77 10 -149 10 l-129 0 -7 -30 c-7 -33 -1 -50 19 -50 7 0 23 -11 35 -24 l23 -25 -37 -182 c-40 -198 -41 -248 -4 -320 11 -22 37 -51 58 -65 84 -55 180 -38 251 44 25 29 40 41 40 31 0 -9 18 -33 39 -52 83 -75 199 -75 282 0 37 33 51 63 30 63 -5 0 -18 -11 -28 -23 -28 -36 -90 -61 -148 -61 -55 0 -93 17 -143 63 -18 17 -38 31 -44 31 -6 0 -30 -18 -53 -39 -46 -42 -103 -64 -144 -55 -131 29 -158 125 -105 376 37 175 36 199 -4 240 -17 19 -32 37 -32 41 0 4 52 7 115 7 106 0 115 -2 125 -21 12 -22 2 -107 -27 -224 -54 -219 -53 -267 4 -309 43 -32 81 -25 123 21 30 32 39 51 45 94 4 30 14 79 22 109 20 74 33 135 39 196 6 49 5 53 -30 86 -20 19 -36 38 -36 42 0 3 49 6 109 6 160 0 159 2 110 -223 -35 -160 -47 -240 -41 -273 2 -12 17 -35 33 -50 52 -50 120 -28 157 51 16 34 77 302 83 360 3 42 -2 55 -36 89 -19 19 -31 37 -27 40 10 6 48 8 124 7 61 -1 69 -4 84 -26 16 -24 16 -31 -4 -118 -82 -358 -84 -381 -47 -421 13 -14 28 -26 34 -26 5 0 28 16 51 35 82 68 156 88 241 65 55 -15 59 -25 42 -103 -14 -64 -16 -67 -33 -52 -10 9 -40 24 -66 35 l-49 18 -47 -24 c-53 -27 -66 -45 -74 -106 -19 -143 164 -247 306 -174 92 47 160 166 160 280 -1 98 -37 145 -275 361 -103 93 -124 132 -125 223 0 156 112 265 275 266 39 0 86 -5 106 -12 57 -20 106 -74 124 -136 25 -86 12 -82 277 -85 92 -1 98 -2 114 -26 15 -23 15 -31 -5 -122 -12 -54 -26 -118 -31 -143 -6 -25 -14 -65 -20 -90 -23 -108 -7 -160 56 -186 30 -13 38 -12 63 1 46 24 69 61 86 143 9 42 25 117 36 165 11 49 21 109 22 133 2 40 -2 49 -31 75 -18 16 -30 34 -27 39 9 15 218 13 233 -2 17 -17 15 -41 -14 -169 -45 -197 -55 -275 -41 -317 13 -39 69 -85 97 -80 9 2 17 -1 17 -7 2 -38 -79 -80 -153 -78 -58 2 -96 18 -145 63 -19 16 -39 30 -46 30 -7 0 -31 -18 -52 -39 -97 -97 -228 -67 -265 60 -22 72 -21 81 20 275 34 163 35 173 19 197 -18 28 -63 40 -137 37 -104 -4 -141 -1 -129 13 6 8 9 23 6 35 -14 76 -98 138 -168 125 -38 -8 -104 -68 -117 -109 -24 -72 12 -122 236 -324 64 -57 117 -126 150 -195 14 -29 19 -62 19 -120 0 -71 -4 -88 -34 -150 -78 -157 -232 -248 -392 -232 -162 17 -260 97 -290 236 -11 54 -47 101 -76 101 -20 0 -91 38 -100 53 -11 19 -63 52 -63 40 0 -5 15 -27 34 -49 33 -39 82 -66 139 -78 22 -5 27 -12 27 -36 0 -101 98 -229 207 -270 73 -28 187 -37 250 -20 211 56 363 274 324 462 -26 121 -77 194 -243 342 -137 123 -162 155 -160 207 2 52 25 84 73 103 38 15 43 15 84 -3 24 -10 48 -28 54 -39 16 -30 13 -87 -4 -102 -8 -7 -15 -16 -15 -21 0 -5 67 -9 149 -9 83 0 152 -4 155 -9 3 -5 -10 -85 -30 -178 -40 -189 -41 -260 -5 -331 39 -77 136 -118 216 -92 48 16 105 66 105 93 0 17 8 12 45 -26 98 -98 234 -101 324 -5 23 25 31 43 31 70 l0 37 -32 -13 c-55 -23 -108 12 -108 72 0 10 18 101 40 202 46 214 48 241 18 270 -20 18 -35 20 -154 20 -128 0 -132 -1 -138 -22 -10 -39 -7 -48 18 -58 14 -5 32 -21 42 -35 16 -24 14 -34 -26 -219 -33 -151 -47 -199 -64 -214 -34 -32 -60 -35 -89 -11 -37 28 -35 60 14 285 22 103 38 197 35 210 -4 13 -16 33 -28 44 -21 20 -32 21 -190 18 l-168 -3 -6 43 c-22 148 -210 241 -371 184z" />
							<path d="M1343 3 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
						</g>
					</svg>
				</div>

				<div
					onClick={() => {
						click('jayhawk');
					}}
					className="col-12 col-md-3 d-flex justify-content-center logo "
				>
					<svg
						className="jayhawk-svg"
						style={{ width: '100%', maxWidth: '250px' }}
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						width="450.000000pt"
						height="450.000000pt"
						viewBox="0 0 300.000000 300.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
							fill="#1F51FF"
							stroke="none"
						>
							<path d="M87 2422 c-9 -2 -17 -9 -17 -16 0 -9 23 -16 72 -20 59 -6 76 -12 98 -35 24 -24 29 -38 35 -112 11 -140 -1 -1207 -14 -1261 -16 -59 -28 -69 -99 -77 -41 -4 -57 -10 -57 -21 0 -13 41 -15 310 -15 277 0 310 2 313 16 2 13 -10 17 -68 21 -80 6 -105 21 -120 77 -11 38 -19 673 -9 669 3 -2 44 -46 90 -99 236 -270 738 -828 768 -854 112 -99 143 -108 386 -109 167 -1 200 1 200 13 0 9 -19 19 -50 26 -145 34 -230 88 -381 239 -112 113 -816 881 -822 897 -2 5 117 130 265 277 200 199 284 277 333 305 95 54 143 48 172 -22 7 -16 14 -210 18 -521 6 -422 10 -504 25 -555 61 -214 198 -347 403 -390 89 -19 289 -19 371 0 208 49 354 195 412 412 20 72 22 113 28 558 8 577 1 547 127 561 36 5 54 11 54 20 0 8 -6 14 -12 14 -237 3 -530 0 -538 -5 -21 -13 1 -23 67 -30 53 -6 72 -12 94 -34 26 -27 27 -31 34 -187 12 -243 0 -824 -19 -905 -29 -134 -96 -224 -204 -276 -48 -23 -73 -28 -162 -31 -89 -3 -114 -1 -162 18 -124 46 -215 168 -243 326 -17 92 -22 985 -6 1027 16 41 38 55 101 62 41 5 60 11 60 21 0 8 -7 14 -15 14 -8 0 -216 0 -462 1 -370 0 -449 -3 -451 -14 -1 -7 9 -19 23 -25 43 -20 34 -60 -33 -144 -56 -70 -456 -500 -470 -506 -8 -2 -5 527 3 575 7 42 44 70 105 78 33 5 50 12 50 21 0 8 -6 14 -12 14 -7 0 -139 1 -294 3 -154 1 -288 1 -297 -1z m1161 -41 c23 -1 42 -4 41 -8 0 -5 -27 -28 -59 -53 -81 -61 -517 -502 -530 -534 -5 -14 -7 -34 -3 -43 6 -17 204 -240 339 -383 34 -36 85 -92 114 -125 30 -33 56 -62 59 -65 4 -3 70 -75 149 -162 172 -189 264 -276 357 -337 l70 -46 -85 -3 c-184 -7 -231 26 -525 358 -60 68 -135 152 -165 185 -30 34 -125 140 -210 235 -195 221 -243 270 -263 270 -9 0 -24 -14 -32 -31 -14 -26 -16 -73 -12 -347 3 -274 6 -321 20 -349 9 -18 17 -34 17 -38 0 -3 -57 -5 -126 -5 l-126 0 6 28 c25 101 29 195 30 747 0 578 -1 614 -31 691 -4 12 15 14 117 14 122 0 122 0 115 -22 -18 -60 -23 -132 -24 -347 0 -179 3 -242 14 -267 28 -67 26 -69 366 291 170 181 234 269 227 313 -5 29 9 37 59 35 26 -1 67 -2 91 -2z m507 -23 c-23 -74 -26 -166 -22 -583 3 -419 5 -455 25 -527 27 -100 50 -144 111 -210 86 -94 195 -135 340 -125 221 14 355 149 390 394 7 42 11 262 11 530 0 429 -1 461 -19 495 -10 21 -16 40 -13 43 5 5 172 8 172 3 0 -2 -7 -21 -15 -43 -11 -32 -14 -116 -15 -425 -1 -512 -13 -626 -83 -765 -52 -104 -183 -211 -302 -247 -105 -32 -334 -26 -452 10 -121 38 -218 122 -273 237 -58 122 -62 165 -69 690 -5 342 -10 488 -19 508 -7 16 -12 30 -12 33 0 2 57 4 126 4 l126 0 -7 -22z" />
						</g>
					</svg>
				</div>
			</div>

            <Particles />

		</div>
	);
}

export default theme;