const Info = ({info})=> {
    return (
      <div
        className={
          info.status === 'success' ? 'info-container' : 'info-container error'
        }
      >
        <p
          className={
            info.status === 'success'
              ? 'info-text'
              : 'info-text error'
          }
        >
          {info.message}
        </p>
      </div>
    )
}

export default Info