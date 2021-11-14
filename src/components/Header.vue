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
            <h1 class='textLog'>Log new activity:</h1>
            <UserInput />
            <PrevLogButton />
        </div>
    </header>
</template>

<script>
import HowToUseButton from './HowToUseButton'
import ExampleEarth from './ExampleEarth'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import UserInput from './UserInput'
import PrevLogButton from './PrevLogButton'


export default {
    name: 'Header',
    components: {
        HowToUseButton,
        ExampleEarth,
        LogoutButton,
        LoginButton,
        UserInput,
        PrevLogButton,
    }
}
</script>