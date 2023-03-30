<script lang="ts">
    export let review: Review;
</script>

<div>
    <p>
        {review.course} <br />
        {review.score} <br />
        {review.date} <br />
        {review.message} <br />
    </p>
</div>
