<template>
    <header>
        <LogoutButton class='btnLogin' v-if="user"/>
        <LoginButton class='btnLogin' v-else/>
        <h1 class='welcome'>Welcome to Cli-Mate</h1>
        <HowToUseButton class='btnHow'/>
        <PrevLogButton class='btnPrev'/>
        <ExampleEarth class='imgExample'/>
        <h1 class='textLog'>Earth Status: status</h1>
        <h1 class='textLog'>Your performance compared to global average:</h1>
        <h1 class='textLog'>Log new activity:</h1>
        <UserInput />
        <GeneralButton class='btnGeneral'/>
    </header>
</template>

<script>
import HowToUseButton from './HowToUseButton'
import PrevLogButton from './PrevLogButton'
import ExampleEarth from './ExampleEarth'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import UserInput from './UserInput'
import GeneralButton from './GeneralButton'

export default {
    name: 'Header',
    components: {
        HowToUseButton,
        PrevLogButton,
        ExampleEarth,
        LogoutButton,
        TransportSelect,
        DestinationEntry,
        ActivityButton,
        LoginButton,
    }
}
</script>