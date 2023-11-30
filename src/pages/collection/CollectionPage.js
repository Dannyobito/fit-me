import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setSelectedCollection } from '../../redux/shop/shop.actions';

import CollectionItem from '../../components/collection-item/CollectionItem';
import './CollectionPage.scss'
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({collection,setSelectedCollection}) => {
  const {collectionId} = useParams();
  useEffect(()=>{
    setSelectedCollection(collectionId)
  },[collectionId, setSelectedCollection])

  return (
    <div className='collection-page'>
      <h2 className='title'>{collection?.title.toUpperCase()}</h2>
      <div className='items'>
        {
          collection?.items.map(item =>{
            return <CollectionItem key={item.id} item={item}/>
          })
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) =>({
  collection: selectCollection(state.shop.collectionId)(state)
})

const mapDispatchToProps = dispatch =>({
  setSelectedCollection: collectionId => {
    dispatch(setSelectedCollection(collectionId))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CollectionPage)