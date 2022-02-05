<template>
	<section id="client-list" class="client-list">
		<p>Pracujemy z&nbsp;klientami reprezentującymi wiele branż –&nbsp;od&nbsp;małych przedsiębiorstw i&nbsp;lokalnych biznesów przez duże muzea oraz ogólnopolskie instytucje kultury po międzynarodowe korporacje.</p>

		<p>Dzięki takiemu doświadczeniu rozumiemy potrzeby klientów i&nbsp;potrafimy realizować zarówno skomplikowane projekty jak i&nbsp;te o&nbsp;mniejszej skali.</p>

		<p>Oto wybrani klienci: Amrest, Energa, ING Bank Śląski, Muzeum Architektury we&nbsp;Wrocławiu, Muzeum Narodowe w&nbsp;Gdańsku, Muzeum Narodowe w&nbsp;Warszawie, Muzeum Narodowe we&nbsp;Wrocławiu, Muzeum Współczesne Wrocław, Zakład Narodowy im.&nbsp;Ossolińskich, Zieta Prozessdesign.</p>
	</section>
</template>

<style lang="scss" scoped>
#client-list {
	width: 60%;
	line-height: 1.5rem;

	li:after {
		content: ', ';
	}
	li:last-of-type:after {
		content: '';
	}
}

//Vue transition
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  // transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
