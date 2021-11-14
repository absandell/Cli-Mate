<template>
    <header>
        <div class = "headerbg">
            <LogoutButton class='btnLogin' v-if="user"/>
            <LoginButton class='btnLogin' v-else/>
            <h1 class='welcome'>Cli-Mate</h1>
        </div>
        <HowToUseButton class='btnHow'/>
        <div class = "info">
            <UserInput />
        </div>
    </header>
</template>

<script>
import HowToUseButton from './HowToUseButton'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import UserInput from './UserInput'


export default {
    name: 'Header',
    components: {
        HowToUseButton,
        LogoutButton,
        LoginButton,
        UserInput,
    }
}
</script>