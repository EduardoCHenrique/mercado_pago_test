import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Loader from 'components/Loader'
import EmptyState from 'components/EmptyState'
import List from 'components/List'

import './Home.scss'

const renderContent = (products, showEmptyState) => {
  return showEmptyState ? <EmptyState /> : <List products={products} />
}

const Home = (props) => {
  const { loading, showEmptyState, products } = props

  return(
    <main className={classNames('home', {'home--loading': loading, 'home--empty': showEmptyState} )}>
      <div className="home__content">
        {loading ? <Loader className="home__loader" /> : renderContent(products, showEmptyState)}
      </div>
    </main>
  )
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.objectOf(PropTypes.string, PropTypes.number))),
  loading: PropTypes.bool,
  showEmptyState: PropTypes.bool
}

Home.defaultProps = {
  products: PropTypes.array,
  loading: false,
  showEmptyState: false
}

export default Home