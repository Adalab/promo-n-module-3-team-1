import '../styles/App.scss';

function App() {
	return <div>

	<header>
		<header id="header" className="header">
			<nav className="header__menu">
				<a href="http://beta.adalab.es/project-promo-n-module-2-team-5/" title="Menu"><img className="header__menu--img"
						src="./assets/images/Lateral.png" alt="Menu" /></a>
			</nav>
		</header>

	</header>

	<main className="page">
		<section className="sample">
			<button className="sample__reset js-resetButton" type="reset">
				<i className="far fa-trash-alt"></i>
				Reset
			</button>
			<article className="sample__card js_card_result">
				<hgroup className="sample___card--title">
					<h2 className="sample__card--title--name js-nameCard js-colorTitle">
						Nombre Apellido
					</h2>
					<h3 className="sample__card--title--job js-jobCard js-colorSubtitle">
						Front-end developer
					</h3>
				</hgroup>
				<!--
        <img
          className="sample__card--img js__profile-image"
          src="./assets/images/picrandom.jpg"
          alt="Imagen elegida por el usuario"
        />
      -->
				<div className="sample__card--img js__profile-image"
					style="background-image: url('./assets/images/picrandom.jpg')"></div>
				<ul className="sample__card--contact">
					<li className="item item1">
						<a href="" target="_blank" title="Llamar" className="itemLink js-colorIcon js-phoneCard">
							<i className="fas fa-mobile-alt"></i>
						</a>
					</li>
					<li className="item item2">
						<a href="" target="_blank" className="itemLink js-colorIcon js-emailCard"><i
								className="far fa-envelope"></i></a>
					</li>

					<li className="item item3">
						<a href="" target="_blank" className="itemLink js-colorIcon js-linkedin">
							<i className="fab fa-linkedin-in"></i></a>
					</li>

					<li className="item item4">
						<a href="" target="_blank" className="itemLink js-colorIcon js-githubcard">
							<i className="fab fa-github-alt"></i></a>
					</li>
				</ul>
			</article>
		</section>

		<form className="formMarginGeneral js-textForm js-form" id="myForm">
			<section className="sectionDesigns">
				<article className="collapsible-title ">
					<div className="a js-headerClick">
						<p><i className="far fa-object-ungroup"></i>Diseña</p>
						<a className="aArrow js-arrow"><img className="arrow" src="./assets/images/arrowx2.png" alt="" />
						</a>
					</div>
					<div className="js-collapse hidden">
						<div className="color">
							<p className="text">colores</p>
							<div className="palette">
								<fieldset className="check" action="/signup">
									<label className="check_one js-paletteOne js_palette" htmlFor="palette">
										<input className="one" id="palette" type="radio" value="1" name="palette" />
										<div className="paletteA">
											<div className="palette_1"></div>
											<div className="palette_2"></div>
											<div className="palette_3"></div>
										</div>
									</label>
									<label className="check_one js-paletteTwo js_palette" htmlFor="palette">
										<input className="one" id="palette" type="radio" value="2" name="palette" />
										<div className="paletteB">
											<div className="palette_1"></div>
											<div className="palette_2"></div>
											<div className="palette_3"></div>
										</div>
									</label>
									<label className="check_one js-paletteThree js_palette" htmlFor="palette">
										<input className="one" id="palette" type="radio" value="3" name="palette" />
										<div className="paletteC">
											<div className="palette_1"></div>
											<div className="palette_2"></div>
											<div className="palette_3"></div>
										</div>
									</label>
									<label className="check_one js-paletteFour js_palette" htmlFor="palette">
										<input className="one" id="palette" type="radio" value="4" name="palette" />
										<div className="paletteD">
											<div className="palette_1"></div>
											<div className="palette_2"></div>
											<div className="palette_3"></div>
										</div>
									</label>
									<label className="check_one js-paletteFive js_palette" htmlFor="palette">
										<input className="one" id="palette" type="radio" value="5" name="palette" />
										<div className="paletteE">
											<div className="palette_1"></div>
											<div className="palette_2"></div>
											<div className="palette_3"></div>
										</div>
									</label>
									<label className="check_one js-paletteSix js_palette" htmlFor="palette">
										<input className="one" id="palette" type="radio" value="6" name="palette" />
										<div className="paletteF">
											<div className="palette_1"></div>
											<div className="palette_2"></div>
											<div className="palette_3"></div>
										</div>
									</label>
								</fieldset>
							</div>
						</div>
				</article>
				<div className="line1"></div>
			</section>
			<section className="section_fill">
				<article className="collapsible-title">
					<div className="boxt a js-headerClick">
						<i className="far fa-keyboard keyfill"></i>
						<h2 className="boxt__title">Rellena</h2>
						<a className="aArrow js-arrow"><img className="arrow" src="./assets/images/arrowx2.png" alt="" /></a>
					</div>
					<div className="js-collapse hidden">
						<fieldset className="quest hidden js-textForm" action="/signup" method="post">
							<label className="quest__label" htmlFor="name">Nombre completo</label>
							<input className="quest__input js-name js_input_name" placeholder="Ej: Sali Jill" id="name" type="text"
								name="name" required />
							<label className="quest__label" htmlFor="job">Puesto</label>
							<input className="quest__input js_input_job" placeholder="Ej: Front-end unicorn" id="job" type="text"
								name="job" required />

							<fieldset className="quest__secondfield">
								<label htmlFor="photo" className="quest__button js__profile-trigger">Añadir imagen</label>

								<div className="action">
									<input type="file" name="photo" id="photo" className="action__hiddenField js__profile-upload-btn"
										required />
								</div>
								<!--<div className="profile">
                  <div className="profile__preview"></div>
                </div>
              -->
								<div className="quest__button--window js__profile-preview"></div>
							</fieldset>

							<label className="quest__label" htmlFor="email">Email</label>
							<input className="quest__input js_input_email" placeholder="Ej: sally-hill@gmail.com" id="email"
								type="text" name="email" required />
							<label className="quest__label" htmlFor="phone">Teléfono</label>
							<input className="quest__input js_input_phone" placeholder="Ej:555-55-55-55" id="phone" type="tel"
								name="phone" required />
							<label className="quest__label" htmlFor="linkedin">Linkedin</label>
							<input className="quest__input js_input_linkedin" placeholder="Ej: sally-hill" id="linkedin" type="text"
								name="Linkedin-profile" required />
							<label className="quest__label" htmlFor="github">Github</label>
							<input className="quest__input js_input_github" placeholder="@sally-hill" id="github" type="text"
								name="Github-profile" required />
						</fieldset>
					</div>
				</article>
				<div className="line1"></div>
			</section>
			<section className="sectionDesigns">
				<article className="collapsible-title ">
					<div className="a js-headerClick">
						<p><i className="fas fa-share-alt"></i>Comparte</p>
						<a className="aArrow js-arrow"> <img className="arrow" src="./assets/images/arrowx2.png" alt="" /></a>
					</div>

					<div className="hidden js-collapse">
						<article className="button">
							<button className="button1 js_create_btn">
								<img className="target" src="./assets/images/target.png" alt="" />
								<p>Crear tarjeta</p>
							</button>
						</article>
						<div className="line3"></div>
						<article className="share js-shareTwitter hiddenTwitter">
							<h1 className="title js-title">La tarjeta ha sido creada:</h1>
							<a className="url js-url" target="_blank"></a>
							<button className="button js-buttonTwitterOne">
								<a href="" target="_blank" className="js-buttonTwitter">
									<i className="fab fa-twitter">
										<p className="twitter js-shareTwitter"> Compartir en twitter</p>
									</i></a>
							</button>
						</article>
				</article>
				<div className="line3 line4 js-line"></div>
			</section>
		</form>
	</main>


		<footer className="footer__container">
			<small className="footer__text"> &copy;Card-AdaS @2021 </small>
			<img className="logo__adalab" src="./assets/images/oks-2filas.png" alt="" />
		</footer>



	</div>;
}

export default App;
