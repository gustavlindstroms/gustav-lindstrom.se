<div class="portfolio">
    <h1>
        Portfolio
    </h1>
    <div class="project-container">
        {#each projects as project}
            <Project bind:project />
        {/each}
    </div>
</div>


<script lang="ts" src="./Portfolio.ts"></script>

<style lang="scss">
	@import '../styles/portfolio.scss';
</style>