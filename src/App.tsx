import { useState, useEffect } from 'react'
import type { Stone, StoneCollection } from './types/Stone.js'
import StoneShelf from './components/StoneShelf.js'
import StoneModal from './components/StoneModal.js'
import './App.css'

function App() {
  const [stones, setStones] = useState<Stone[]>([])
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch('/stones.json')
      .then(response => response.json())
      .then((data: StoneCollection) => setStones(data.stones))
      .catch(error => console.error('Error loading stones:', error))
  }, [])

  const handleStoneClick = (stone: Stone) => {
    setSelectedStone(stone)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedStone(null)
  }

  return (
    <>
      <StoneShelf stones={stones} onStoneClick={handleStoneClick} />
      <StoneModal
        stone={selectedStone}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default App
