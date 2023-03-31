<script lang="ts">
    export let review: Review;
</script>
<div>
    <p id="score">{review.score}/10</p>
    <p id="course">{review.course}</p>
    <p id="message">{review.message}</p>
    <p id="date">{review.date} </p>
</div>

<style>
    div {
        background-color: var(--action);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }
    p {
        padding-left: 10px;
        padding-right: 10px;
    }

    #score {
        width: 40px;
        height: 40px;
        background-color: var(--secondary);
        color: var(--action);
    }
</style>
