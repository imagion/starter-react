export default function Home() {
  return (
    <main className='Home'>
      <div className='container'>
        <h1>Home</h1>

        <h4>Light</h4>
        <input className='toggle--light' id='cb1' type='checkbox' />
        <label className='toggle-button' htmlFor='cb1'></label>
        <h4>Flat</h4>
        <input className='toggle--flat' id='cb4' type='checkbox' />
        <label className='toggle-button' htmlFor='cb4'></label>
        <h4>iOS</h4>
        <input className='toggle--ios' id='cb2' type='checkbox' />
        <label className='toggle-button' htmlFor='cb2'></label>
        <h4>Skewed</h4>
        <input className='toggle--skewed' id='cb3' type='checkbox' />
        <label
          className='toggle-button'
          data-toggle-off='OFF'
          data-toggle-on='ON'
          htmlFor='cb3'
        ></label>

        <h4>Flip</h4>
        <input className='toggle--flip' id='cb5' type='checkbox' />
        <label
          className='toggle-button'
          data-toggle-off='Nope'
          data-toggle-on='Yeah!'
          htmlFor='cb5'
        ></label>
      </div>
    </main>
  )
}
