# SENG-LIVE-112122 Phase 2 - React

## Phase Level Objectives

- Design a React component hierarchy based on a wireframe
- Use React to create components that interact with an API
- Incorporate client-side routing into a single-page application in React


| Lecture | Notes | Videos | Starter | Solution |
| ------- | :---: | ------ | ------- | -------- |
| 1. (12/12/22) Components & Props     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |  [Video](https://vimeo.com/780530156)      |    [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/01_components_and_props)     |   [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/01_notes/01_components_and_props)       |
| 2. (12/13/22) State & Events     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |   [Video](https://vimeo.com/780900506)     |    [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/02_state_and_events%20)     |    [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/02_notes/02_state_and_events%20), [Local variables vs state variables](https://codesandbox.io/s/counter-state-example-0r8stb?file=/src/App.js), [SmartHome app - Passing State as Props](https://codesandbox.io/s/vigilant-minsky-iiykrb)      |
| 3. (12/14/22) Information Flow     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |  [Video](https://vimeo.com/781258042)      |   [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/03_information_flow)      |    [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/03_notes/03_information_flow), [SmartHome app with clickable bulbs](https://codesandbox.io/s/smarthome-with-clickable-bulbs-woyctp), [SmartHome app with individually clickable bulbs](https://codesandbox.io/s/smarthome-with-individually-switchable-bulbs-du3hot)      |
| 4. (12/16/22) Forms     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |   [Video](https://vimeo.com/781955989)     |   [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/04_react_forms)      |  [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/04_notes/04_react_forms), [controlled form with single state object](https://codesandbox.io/s/refactoring-a-controlled-form-with-individual-pieces-of-state-juv663?file=/src/App.js), [controlled form with individual pieces of state](https://codesandbox.io/s/controlled-form-with-individual-pieces-of-state-pbjpe4?from-embed)        |
| 5. (12/19/22) Side Effects & Data Fetching     |  [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)     |   [Video](https://vimeo.com/782717064)     |   [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/05_side_effects_and_data_fetching)      |   [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/05_notes/05_side_effects_and_data_fetching), [useEffect cleanup demo](https://codesandbox.io/s/useeffect-cleanup-ig17kd?file=/src/Timer.js)       |
| 6. (12/20/22) PATCH & DELETE     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |   [Video](https://vimeo.com/783086708)     |    [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/06_PATCH_DELETE)     |   [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/06_notes/06_PATCH_DELETE)       |
| 7. (12/23/22) Client-Side Routing     |   [Notes](https://docs.google.com/document/d/1PaEUsoVruIU3pSUOz9jlsfVhxrwB1N7XPYbmak03wKg/edit?usp=sharing)    |    [Video](https://vimeo.com/784030040)    |   [Starter](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/main/07_client_side_routing)      |    [Solution](https://github.com/learn-co-students/SENG-LIVE-112122-Phase-2/tree/07_notes/07_client_side_routing)      |

## 1: Components and Props
### SWBATs:
- Review the benefits of React over Vanilla JS 
- Review the difference between HTML and JSX
- Review the importance of Components
- Review how a component is written
- Explain what props are and how to create them
- Recognize best practices when writing components and props
- Observe how to render multiple components from a list
### Lecture Topics:
- JSX
- Components
- Props
- Destructuring


## 2: State & Events

### SWBATs:
- Explain the importance of state
- Explain the difference between state and props
- Observe how to use the useState hook
- Observe how to use DOM events in React
### Lecture Topics:
- Creating & Updating State
- Events
- Callbacks
- useState


## 3: Information Flow
### SWBATs:
- Define the term “lifting state”
- Recognize the pattern for changing state in a parent component from a child component
- Explain the role that callback functions play in changing parent state
- Observe how we can render reusable components that invoke different callback functions after an event
- Recognize destructured props and how to work with them
### Lecture Topics:
- Callback functions as props
- Changing parent state
- Reusing components w/ different behaviors

## 4: Forms
### SWBATs:
- Explain the difference between a controlled and uncontrolled input
- Explain why controlled inputs are preferred by the React community
- Review how to use callback functions with events in React
- Review how to change parent state from a child component
### Lecture Topics:
- Controlled vs uncontrolled inputs
- Forms

## 5: Side Effects & Data Fetching

### SWBATs:
- Explain what a side effect is
- Observe how React manages side effects with the useEffect hook
- Observe how to use the useEffect hook to fetch data on page load
- Observe how to send a POST request via form
- Review changing parent state
### Lecture Topics:
- useEffect
- Dependency array
- fetch => GET & POST

## 6: PATCH & DELETE
### SWBATs:
- Observe how to send a PATCH & DELETE request
- Review changing parent state
### Lecture Topics:
- fetch => PATCH & DELETE

## 7: Client Side Routing

### SWBATs:
- Review the difference between server-side and client-side routing
- Observe a refactor to include client-side routing using React Router V5
- Explain what a nested route is
- Observe how to handle nested client-side routes 
### Lecture Topics:
- React Router
