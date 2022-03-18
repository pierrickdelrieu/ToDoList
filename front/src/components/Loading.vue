<template>
    <div id="loading">
        <div id="loading-content">
            <h1>Loading in progress ...</h1>
            <img src="../assets/loading.svg" alt="Loading icon"/>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Loading"
}
</script>

<style>
    #loading {
        position: fixed;
        left: 0;
        top: 0; 
        
        width: 100vw;
        height: 100vh;
        background-color: rgba(237, 237, 237, 0.7);
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #loading-content {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>