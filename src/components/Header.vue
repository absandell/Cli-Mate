<template>
    <header>
        <div class = "headerbg">
            <LogoutButton class='btnLogin' v-if="user"/>
            <LoginButton class='btnLogin' v-else/>
            <h1 class='welcome'>Cli-Mate</h1>
        </div>
        <HowToUseButton class='btnHow'/>
        <ExampleEarth class='planet'/>
        <div class = "info">
            <h1 class='textLog'>Earth Status: status</h1>
            <h1 class='textLog'>Your performance compared to global average:</h1>
            <h1 class='textLog'>Log new activity:</h1>
        </div>
    </header>
</template>

<script>
import HowToUseButton from './HowToUseButton'
import ExampleEarth from './ExampleEarth'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

export default {
    name: 'Header',
    components: {
        HowToUseButton,
        ExampleEarth,
        LogoutButton,
        LoginButton,
    }
}
</script>