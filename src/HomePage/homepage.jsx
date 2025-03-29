import { useState } from 'react'
import Header from '/src/HomePage/header'
import Banner from '/src/HomePage/banner'
import EmotionalWellness from './emotionalWellness'
import MotivationSection from './motivationSection'
import FeatureCards from './featureCards'
import HowWeWork from './HowWeWork'

function HomePage() {

  return (
    <div>
      <Header />
      <Banner />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <EmotionalWellness />
        <MotivationSection />
      </div>
      <FeatureCards />
      <HowWeWork />
    </div>
  )
}

export default HomePage