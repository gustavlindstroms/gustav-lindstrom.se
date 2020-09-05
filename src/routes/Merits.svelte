<script lang="ts" src="./Merits.ts">

</script>

<style lang="scss">
	@import '../styles/merits.scss';
</style>

<div class="merits">
	<div class="about">
		<div class="about-image-container">
			<img />
		</div>
		<div class="about-text">
			<h2>About Me</h2>
			<p>{about}</p>
		</div>
		<div class="about-list">
			<h2>I also:</h2>
			<ul>
				<li>Have a drivers license</li>
				<li>Used to be an elite swimmer at national level.</li>
			</ul>
		</div>
	</div>
	<div class="merits-list">
		<h1>experience</h1>
		<div class="category">

			<input bind:group value={'job'} type="radio" id="jobs" name="category" checked />
			<label for="jobs">work</label>

			<input bind:group value={'edu'} type="radio" id="edu" name="category" />
			<label for="edu">education</label>

			<input bind:group value={'vol'} type="radio" id="vol" name="category" />
			<label for="vol">volunteer</label>

		</div>
		<div class="merits-container">
			{#if group == 'job'}
				{#each jobs as merit, i}
					<Merit index={i} bind:merit />
				{/each}
			{:else if group == 'edu'}
				{#each edu as merit, j}
					<Merit index={j} bind:merit />
				{/each}
			{:else if group == 'vol'}
				{#each vol as merit, h}
					<Merit index={h} bind:merit />
				{/each}
			{/if}
		</div>
	</div>
</div>
