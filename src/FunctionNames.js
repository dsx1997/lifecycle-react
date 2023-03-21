const titleInfo = [
    {
        'title' : 'Mounting', 
        'description' : ['Mounting means putting elements into the DOM' , 'React has four built-in method that gets called, in this order, when mounting a component.'] 
    },
    {
        'title' : 'Updating', 
        'description' : ['The next phase in the lifecycle is when a component is updated.' , 
            "A componenet is updated whenever there is a change in the component's props or state.",
            "React has five built-in functions that gets called, in this order, when a component is updated."
        ],
    },
    {
        'title' : 'Unmounting', 
        'description' : ['The last phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.' , 
            "React has only one built-in functions that gets called, when a component is unmounted."
        ],
    },
]


const funcName = [
    [
        {
            'name' : 'constructor', 
            'description' : "The constructor method is called before anything else, when the component is initiated, and it is the natural place to set the initial state and other initial values. The constructor method is called with the props, as argument, and you should always start by calling the super(props) and this will initiate the parent's constructor and allows the component to inherit methods from its parents (React.Component)"
        }, 
        {
            'name' : 'getDerivedFromProps',
            'description' : "The getDerivedStateFromProps is called right before rendering the element in the DOM. It is natural place to set the state based on the initial props. It has the state as argument and returns an object with the changes to the state."
        }, 
        {
            'name' : 'render',
            'description' : 'The render method is required and is the methode that actually output HTML element into the DOM.'
        }, 
        {
            'name' : 'componentDidMount',
            'description' : "The componentDidMount method is called after the component is rendered."
        }
    ], 
    [
        {
            'name' : 'getDerivedStateFromProps',
            'description' : "Also, at update, the getDerivedStateFromProps method is called when a component gets updated. This is still natural place to set the state object based on the props."
        },
        {
            'name' : 'shouldComponentUpdate',
            'description' : "In the souldComponentUpdate method, you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true."
        },
        {
            'name' : 'render',
            'description' : "The render method is of course called when a component is updated, it has to re-render the HTML to the DOM, with the new changes."
        },
        {
            'name' : 'getSnapshotBeforeUpdate',
            'description' : "In the getSnapshotBeforeUpdate method, you have access to the props and state before the udpate, mean that even after the update, you can check what the value were before the update."
        },
        {
            'name' : 'componentDidUpdate',
            'description' : "The componentDidUpdate method is called after a component is updated."
        },
    ],
    [
        {
            'name' : 'componentWillUnmounting',
            'description' : "The componentWillUnmounting method is called when a component is removed from the DOM."
        },
    ],
];

export {titleInfo, funcName};