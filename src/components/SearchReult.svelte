<script lang='ts'>
    export let professor: Professor;
</script>

<link rel="stylesheet" href="/src/app.css">
<li>
    <a href="/professors/{professor.id}">{professor.name}</a>
</li>


<style>
    
    li {
        background-color: var(--action);
    }

    
</style>