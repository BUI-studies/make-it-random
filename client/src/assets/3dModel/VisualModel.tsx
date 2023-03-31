import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls, useAnimations } from '@react-three/drei'
import classes from './model.module.scss'

const Model = (props) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/lighthouse2.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    // actions.Animation.play()
    actions[names[0]].reset().fadeIn(0.5).play()
    // actions[names[0].split('|')[1]].reset().fadeIn(0.5).play()
  }, [])

  return <primitive ref={group} object={scene} {...props} />
}

const VisualModel = () => {
  return (
    <div className={classes.anim}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 80 ,zoom: 2}} style={{position: 'absolute'}}>
        {/* <color attach="background" args={['black']} /> */}
        {/* <pointLight position={[10, 10, 10]} />
         */}
        {/* <ambientLight /> */}
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]} rotation={[0, 0.3, 0]}>
          <Stage environment={'warehouse'}>
            <Model scale={0.2} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

export default VisualModel
