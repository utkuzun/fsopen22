const Filter = ({filter, setFilter}) => {
          return (
            <p>
              filter shown with{' '}
              <input
                type='text'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </p>
          )
}

export default Filter