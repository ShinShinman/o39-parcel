<template>
	<footer>
		<div class="inv">
			<p v-html="translation.slogan"></p>
		</div>
		<div class="mid">
			<p>
				Władysława Orkana 39/3<br />
				51-153 Wrocław
			</p>
			<ul>
				<li><a href="/2D67BBEFE9927C893B343063FE849337A3BB622A.asc">{{ translation.PGPpublicKey }}</a></li>
			</ul>
		</div>
		<div class="social-logos">
			<ul>
				<li>
					<a href="https://www.behance.net/orkana39" target="_blank" class="be">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="behance" class="svg" viewBox="0 0 24 24">
							<g>
								<path :style="{ fill: currentColor }" d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"></path>
							</g>
						</svg>
					</a>
				</li>
			<li>
				<a href="https://www.instagram.com/orkana39/" target="_blank" class="insta">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="insta" class="svg" viewBox="0 0 200 200">
					<g>
						<path :style="{ fill: currentColor }" class="st0" d="M175.9,180.7H25.3c-3.2,0-6-2.8-6-6v-94h25.3c-3.5,4.7-4.6,13.4-4.8,19.3c0.2,33.2,27.5,60.4,61.4,60.2
							c33.2,0.2,60.5-27.1,60.2-60.2c0.3-5.8-0.5-14.5-4.8-19.3h25.3v94C181.9,177.9,179.1,180.7,175.9,180.7 M100,61.4
							c21.3,0,38.6,17.3,38.6,38.6s-17.3,38.6-38.6,38.6S61.4,121.3,61.4,100S78.7,61.4,100,61.4 M149.4,25.3h19.3c3.2,0,6,2.8,6,6v19.3
							c0,3.2-2.8,6-6,6h-19.3c-3.2,0-6-2.8-6-6V31.3C143.4,28.1,146.2,25.3,149.4,25.3 M175.9,0H24.1C10.6,0,0,10.6,0,24.1v151.8
							C0,189.4,10.6,200,24.1,200h151.8c13.5,0,24.1-10.6,24.1-24.1V24.1C200,10.6,189.4,0,175.9,0"></path>
					</g>
				</svg>
				</a>
			</li>
			</ul>
			<p class="copyrights"><span class="copy">&copy;</span> {{ year }} Olaf Schindler</p>
		</div>
	</footer>
</template>

<script>

	const translations = {
		en: {
			PGPpublicKey: 'PGP Public Key',
			slogan: 'Looking for someone to work with on a new project? Drop me a line: <a href="mailto:studio@orkana39.pl">studio@orkana39.pl</a> or lets talk: <a href="tel:+48 606 892 007">+48&nbsp;606&nbsp;892&nbsp;007</a>.'
		},
		pl: {
			PGPpublicKey: 'Klucz publiczny PGP',
			slogan: 'Szukasz kogoś do współpracy przy następnym projekcie? Zatelefonuj: <a href="tel:+48 606 892 007">+48&nbsp;606&nbsp;892&nbsp;007</a> albo napisz: <a href="mailto:studio@orkana39.pl">studio@orkana39.pl</a>.'
		}
	}

	export default {
		props: [ 'currentColor', 'userLanguage' ],
		data() {
			return {
				year: new Date().getFullYear()
			}
		},
		computed: {
			translation: function() {
				return translations[this.userLanguage]
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

footer {
	position: absolute;
	bottom: 0;

	display: grid;
	// grid-template-columns: repeat(10, 10%);
	grid-column-gap: 10px;
	grid-template-columns: repeat(10, 1fr);
	grid-template-areas: 'a a a a . b b c c . .';

	font-size: 14px;
	p, ul { font-size: 14px; }

	.inv {
		grid-area: a;
		// grid-column: 1 / span 5;
		letter-spacing: -.01em;
		// width: 40%;
		// margin-right: 10%;

		p {
			font-size: 21px;
		}
	}
	.mid {
		grid-area: b;
		// width: 20%;
		// grid-column: 6 / span 2;
		// margin-right: 10px;
		p {
			margin-bottom: 1.5em;
		}
		ul {
			list-style: none;
		}
	}
	.social-logos {
		grid-area: c;
		// width: 20%;
		 ul {
			@include inline-list;

			li {
				margin-right: 3rem;
				height: 21px;
			}

			a {
				display: inline-block;
				width: 16px;
				height: 16px;

				&:hover {
					text-decoration: none;
					border: none;

					path {
						fill: white !important;
					}
				}
			}
		 }
		 p.copyrights {
			 margin-top: 3em;
			 span.copy {
				 position: relative;
				 bottom: -2.5px;
			 }
		 }
	}
}

@media all and (max-width: 768px) {
	footer {
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas:
			'a a a .'
			'b b c c';
		.inv {
			font-size: 24px;
		}

		.mid {
			p {
				margin-bottom: 0;
				&:last-of-type {
					margin-bottom: 1.5em;
				}
			}
		}

		.social-logos {
			ul li {
				margin-right: 2rem;
			}
		}
	}
}
</style>
