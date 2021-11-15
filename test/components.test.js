import { mount } from '@vue/test-utils'
import jsdom from 'jsdom'
describe("Front-End Components", () => {

    const UserInput = {
        template: `
        <template>
        <img v-if="statusText == 'Very Bad'" id="planet1" class='planet' src="../assets/Earth1.png">
        <img v-if="statusText == 'Bad'" id="planet2" class='planet' src="../assets/Earth2.png">
        <img v-if="statusText == 'Neutral'" id="planet3" class='planet' src="../assets/Earth3.png">
        <img v-if="statusText == 'Good'" id="planet4" class='planet' src="../assets/Earth4.png">
        <img v-if="statusText == 'Very Good'" id="planet5" class='planet' src="../assets/Earth5.png">
        <h1 class='textLog'>Earth Status: {{fullText}} </h1>
        <h1 class='textLog'>Log new activity:</h1>
    
        <select v-model="score.type" class='TransportSelect' id='transport'>
        <option disabled value="">Please select one</option>
        <option>Automobile</option>
        <option>Walk</option>
        <option>Bike</option>
        </select>
    
        <form class='DestinationEntry'>
            <label for="fname">Distance:</label><br>
            <input type="text" v-model="score.fromAddress" id="distance" name="Distance" ref='Distance'><br>
        </form>
    
        <button class='btnActivity' v-on:click="EnterInput">Enter Activity</button>
    </template>
    `,
    props: ['statusText']
    }

    test("Very Bad Planet Diplays", () =>{
        const wrapper = mount(UserInput, {
            props: {
                statusText: 'Very Bad'
            }
        })
        expect(wrapper.get('#planet1').isVisible()).toBe(true)
        expect(wrapper.get('#planet2').isVisible()).toBe(false)
        expect(wrapper.get('#planet3').isVisible()).toBe(false)
        expect(wrapper.get('#planet4').isVisible()).toBe(false)
        expect(wrapper.get('#planet5').isVisible()).toBe(false)
    })

    test("Bad Planet Diplays", () =>{
        const wrapper = mount(UserInput, {
            props: {
                statusText: 'Bad'
            }
        })
        expect(wrapper.get('#planet1').isVisible()).toBe(false)
        expect(wrapper.get('#planet2').isVisible()).toBe(true)
        expect(wrapper.get('#planet3').isVisible()).toBe(false)
        expect(wrapper.get('#planet4').isVisible()).toBe(false)
        expect(wrapper.get('#planet5').isVisible()).toBe(false)
    })


    test("Neutral Planet Diplays", () =>{
        const wrapper = mount(UserInput, {
            props: {
                statusText: 'Neutral'
            }
        })
        expect(wrapper.get('#planet1').isVisible()).toBe(false)
        expect(wrapper.get('#planet2').isVisible()).toBe(false)
        expect(wrapper.get('#planet3').isVisible()).toBe(true)
        expect(wrapper.get('#planet4').isVisible()).toBe(false)
        expect(wrapper.get('#planet5').isVisible()).toBe(false)
    })


    test("Good Planet Diplays", () =>{
        const wrapper = mount(UserInput, {
            props: {
                statusText: 'Good'
            }
        })
        expect(wrapper.get('#planet1').isVisible()).toBe(false)
        expect(wrapper.get('#planet2').isVisible()).toBe(false)
        expect(wrapper.get('#planet3').isVisible()).toBe(false)
        expect(wrapper.get('#planet4').isVisible()).toBe(true)
        expect(wrapper.get('#planet5').isVisible()).toBe(false)
    })

    test("Very Good Planet Diplays", () =>{
        const wrapper = mount(UserInput, {
            props: {
                statusText: 'Very Good'
            }
        })
        expect(wrapper.get('#planet1').isVisible()).toBe(false)
        expect(wrapper.get('#planet2').isVisible()).toBe(false)
        expect(wrapper.get('#planet3').isVisible()).toBe(false)
        expect(wrapper.get('#planet4').isVisible()).toBe(false)
        expect(wrapper.get('#planet5').isVisible()).toBe(true)
    })
});