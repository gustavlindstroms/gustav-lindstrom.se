<script lang="ts" src="./Merits.ts">

</script>

<style lang="scss">
	@import '../styles/merits.scss';
</style>

<div class="merits">
	{#if showScroll}
		<div class="scroll-down">
			<div class="div1" />
			<div class="div2" />
	    </div>
	{/if}
	<div class="about">
		<div class="about-image-container">
			<img src="portrait/me.png" />
		</div>
		<div class="about-text">
			<h2>about me</h2>
			<p>{about}</p>
		</div>
		<div class="about-list">
			<ul>
				<h2>I also:</h2>
				<li>
					<i class="far fa-circle" style="font-size: 0.9rem" />
					Have a drivers license.
				</li>
				<li>
					<i class="far fa-circle" style="font-size: 0.9rem" />
					Used to be an elite swimmer at national level.
				</li>
				<li>
					<i class="far fa-circle" style="font-size: 0.9rem" />
					Love hiking, fishing and being outdoors!
				</li>
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
		<div class="fade-down">
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
			<div class="intersection-element" />
		</div>
		<div class="fade-up">
		</div>
	</div>
	<div class="tools">
		<h2>relevant tools:</h2>
		<div class="tools-container">
			{#each tools as tool, i}
				<div class="tooltip" style="animation-delay: {0.05 * i}s">
					<img src="tools/{tool.icon}" />
					<span class="tooltiptext">{tool.name}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
