import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import styles from '../styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.changeCopyState = this.changeCopyState.bind(this);
    this.state = {
      copied: false
    };
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  render() {
    const {
      background,
      name,
      moreUrl,
      showingFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={classes.ColorBox}
          style={{ backgroundColor: background }}
        >
          {/* *** Copy overlay code starts *** */}
          <div
            style={{ backgroundColor: background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied
            })}
            //className={`${classes.copyOverlay} ${copied ? `${classes.showOverlay}` : ''}`}
          />
          <div
            className={classNames(classes.copyMsg, {
              [classes.showMsg]: copied
            })}
            // className={`${classes.copyMsg} ${
            //   copied ? `${classes.showMsg}` : ''
            // }`}
          >
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          {/* *** Copy overlay code ends *** */}
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
