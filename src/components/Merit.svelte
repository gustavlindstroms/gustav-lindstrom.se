<script lang="ts" src="./Merit.ts">

</script>

<style lang="scss">
	@import '../styles/merit.scss';
</style>

<div class="merit-container" style="animation-delay:{0.1 * index}s">
	<div class="merit-info">
		<div class="logo-container">
			<img src="logos/{merit.image}"/>
		</div>
		<div class="spacer">
			<div class="company-title">
				<h3>{merit.companyName}</h3>
				<h2>{merit.title}</h2>
			</div>
			<div class="period">
				<span>{merit.startDate}</span>
				{#if merit.endDate}
					<span> - {merit.endDate}</span>
                {:else}
                <span> - present</span>
                {/if}
			</div>
		</div>
	</div>
	<div class="description">
		<p>{merit.description}</p>
	</div>

</div>
