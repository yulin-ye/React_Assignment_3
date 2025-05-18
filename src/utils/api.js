export const fetchData = () => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        name: 'Full Stack Course',
        price: '$5000',
        language: 'Chinese',
        duration: '2 hours',
        location: 'Sydney',
        imageUrl: 'src/images/office-desk-with-laptop.jpg',
        isNew: true,
        isCompleted: true,
      },
      {
        name: 'UI/UX Design',
        price: '$3000',
        language: 'English',
        duration: '5 hours',
        location: 'Melbourne',
        imageUrl: 'src/images/ui_ux.jpg',
        isNew: false,
        isCompleted: false,
      },
      {
        name: 'AI Engineer',
        price: '$6000',
        language: 'English',
        duration: '10 hours',
        location: 'Brisbane',
        imageUrl: 'src/images/ai_engineer.jpg',
        isNew: true,
        isCompleted: true,
      }
    ]
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}