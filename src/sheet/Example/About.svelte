<!-- <div>
	<h1>Example character sheet buildt with Svelte</h1>
	<h3><u>https://svelte.dev/</u></h3>

	<p>Developed by Naratna. For more information, visit</p>
	<p><u>https://github.com/Naratna/svelte-roll20-template</u></p>
</div> -->
<template lang="pug">
	div
		h1 Example character sheet buildt with Svelte
		h3 
			u https://svelte.dev/

		p Developed by Naratna. For more information, visit
		p
			u https://github.com/Naratna/svelte-roll20-template
</template>

<style lang="sass">
	div 
		background-color: #1e1e1e
		width: 1fr
		height: 500px
		padding: 10px
		color: white

	h1, h3, p 
		color: white
		margin: 5px
</style>
