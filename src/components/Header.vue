<template>
    <header>
        <LogoutButton class='btnLogout'/>
        <h1 class='title'>Cli-Mate</h1>
        <h1 class='welcome'>Welcome: username</h1>
        <HowToUseButton class='btnHow'/>
        <PrevLogButton class='btnPrev'/>
        <ExampleEarth class='imgExample'/>
        <h1 class='textLog'>Earth Status: status</h1>
        <h1 class='textLog'>Your performance compared to global average:</h1>
        <h1 class='textLog'>Log new activity:</h1>
        <TransportSelect class='TransportSelect'/>
        <DestinationEntry class='DestinationEntry'/>
        <ActivityButton class='btnActivity' />
        <h1 class='textLog'>General Information:</h1>
    </header>
</template>

<script>
import HowToUseButton from './HowToUseButton'
import PrevLogButton from './PrevLogButton'
import ExampleEarth from './ExampleEarth'
import LogoutButton from './LogoutButton'
import TransportSelect from './TransportSelect'
import DestinationEntry from './DestinationEntry'
import ActivityButton from './ActivityButton'

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
  }
}
</script>