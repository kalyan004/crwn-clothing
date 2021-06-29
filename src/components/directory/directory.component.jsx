import React  from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
const Directory =({sections}) => (
<div className = 'directory-menu'>
            {
                sections.map(({id, ...otherSetionProps}) => (
                    <MenuItem key = {id} {...otherSetionProps} />
      ))
            }
        </div>  
)


  const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
  });

export default connect(mapStateToProps)(Directory);