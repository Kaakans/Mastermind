import { h, Component } from 'preact';

export interface IBlocksState { blockCount: number; }

export default class Blocks extends Component<any, IBlocksState> {
    render() {
        return <div id="contact">
            <h1 className="secondary-title">Blocks</h1>
            <input type="text" onInput={this.onNumberOfBlocksChange} />
            <div className="block-container">
                {this.renderBlocks()}
            </div>
        </div>
    }
    private onNumberOfBlocksChange = (event: any) => this.setState({ blockCount: event.target.value });

    private renderBlocks = () => {
        const blocks = [];

        for (let i = 0; i < this.state.blockCount; i++) {
            console.log(JSON.stringify(i));
            blocks.push(<div className="block"><span>{i}</span></div>);
        }

        return blocks;
    }
}