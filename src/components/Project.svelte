<script lang="ts" src="./Project.ts">

</script>

<style lang="scss">
	@import '../styles/project.scss';
</style>

<div class="flip-card">
	<div class="inner">
		<div class="front">
			<img class="background-image" src={project.image} />
			<h2>{project.name}</h2>
			<span>{project.description}</span>
			<div class="toolbox">
				{#each project.tools as tool}
					<img src="tools/{tool.icon}" />
				{/each}
			</div>
			<div class="ripple"></div>
		</div>
		<div class="back">
			{#if project.link && project.linktype === 'repo'}
			<h2>You're welcome to have a closer look!</h2>
				<a href={project.link}>
					<i class="fab fa-github" />
				</a>
			{:else if project.link && project.linktype === 'site'}
			<h2>You're welcome to have a closer look!</h2>
				<a href={project.link}>
					<i class="fas fa-link" />
				</a>
			{/if}
		</div>
	</div>
</div>
