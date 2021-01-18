import React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { filterWishlished } from '../store/actions/courseActions';

interface iProps {
  wishlist: boolean
  filterWishlished: (wishlist: boolean) => void
}

const Search:React.FC<iProps> = ({ wishlist, filterWishlished }) => {
  const _handleAction = () => filterWishlished(!wishlist);
  return (
    <Box display='flex' mb={6} className='soft-shadow'>
      <TextField
        style={{ flex: 1, background: 'white' }} // This is very very bad
        placeholder="Wonach suchst du?"
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
                color={wishlist ? 'primary' : 'secondary'}
                onClick={_handleAction}
              >
                <FavoriteIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

const mapStateToProps = (state: any) => ({ wishlist: state.courses.wishlistFilter });
export default connect(mapStateToProps, { filterWishlished })(Search);
