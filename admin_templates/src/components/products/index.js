import Page from './Page';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const {token} = state.login

    return {
        token: Object.assign({}, token)
    }
}

export default connect(mapStateToProps)(Page);