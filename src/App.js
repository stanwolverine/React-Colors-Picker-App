import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import Page from './components/Page';
import seedColors from './seedColors.js';
import { generatePalette } from './colorHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes.length > 0 ? savedPalettes : seedColors
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  savePalette(newPalette) {
    this.setState(
      currState => ({
        palettes: [...currState.palettes, newPalette]
      }),
      this.syncLocalStorage
    );
  }

  deletePalette(id) {
    this.setState(
      currState => ({
        palettes: currState.palettes.filter(p => p.id !== id)
      }),
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }

  findPalette(id) {
    return this.state.palettes.find(c => c.id === id);
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classname='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new'
                  render={RouterProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...RouterProps}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={RouterProps => (
                    <Page>
                      <SingleColorPalette
                        {...RouterProps}
                        palette={generatePalette(
                          this.findPalette(RouterProps.match.params.paletteId)
                        )}
                        colorId={RouterProps.match.params.colorId}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path='/'
                  render={RouterProps => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...RouterProps}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path='/palette/:id'
                  render={RouterProps => (
                    <Page>
                      <Palette
                        {...RouterProps}
                        palette={generatePalette(
                          this.findPalette(RouterProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />

                <Redirect to='/' />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
