# scene

- we create a scene before doing a three js project.
- its a imaginary world / virtual world.
- Scene is empty at starting
- We have to add things like lights, camera

# Camera

- Jo bhi hmare virtual world me chal rha h, usko dekhne ka view
- This is visible to us on our viewport
- Camera me properties hoti h, FOV (Field of view)
- FOV => Camera kitna angle ka view dekh skta hai
- Aspect ratio =>
- Near / Far => Near is ki min distance jaha se camera ko dikhna start hoga, Far ki max distance jaha tak camera dekh skta hai.
- Near se km vala element, and FAR SE jyda duri vale element camera completely ignore krta hai.

# Mesh

- Mesh means objet
- Its made by two things -> Shape and Material
- eg. Cube , plastic, eg. Cube, metal, eg.

# lights

- Its basicaly the lights on scene
- Lights can be of many types
- eg. Directional lights (Ye straight light me jaati hai, spread nahi hoti)
- eg. Point Light (Bulb ki tarah hoti hai, Ye feelti hai surroundings me.)

# Renderer
- scena me mesh hota h, camera hota h, light hoti h
- Renderer => Jo world humne create kiya hai, usme kya kya hoga, kya calculations hogi, light kaha se kaha pe reflect hogi. Ye sari calculations hme renderer krke dega. Isi ki vajah se elements Dikhte hai. Renderer calculations krke, ek image bnata hai, and wo image hmw show kr deta hai.

- By default camera and mesh ek hi place pe hote hai. 

## To run this project run 
- npm install --save three
- npm install --save-dev vite
- npx vite

OR
- npm install
- npx vite