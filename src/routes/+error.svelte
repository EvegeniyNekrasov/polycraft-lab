<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status} {$page?.error?.message}</h1>
	<a href="/">Back to home</a>
</div>
