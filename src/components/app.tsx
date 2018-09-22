import { h, Component } from 'preact';
import Blocks from './blocks';

export default class App extends Component<any, any> {
    render() {
        return <div>
            <h1>Hello!</h1>
            <Blocks />
        </div>;
    }
}