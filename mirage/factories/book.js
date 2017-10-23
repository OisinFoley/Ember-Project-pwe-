// import { Factory } from 'ember-cli-mirage';
import Mirage, {Factory} from 'ember-cli-mirage';


export default Mirage.Factory.extend({
	title: faker.lorem.sentence,
	author() {return faker.name.findName(); },
	year: faker.date.past
});
