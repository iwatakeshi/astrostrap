import Form from './form.astro';
import InputGroup from './input_group';
import Check from './check';
import Range from './range.astro';
import Select from './select.astro';
import Control from './control.astro';
import Floating from './floating.astro';
import Label from './label.astro';
import Text from './text.astro';

export default Object.assign(Form, {
    Check,
    Control,
    Floating,
    InputGroup,
    Label,
    Range,
    Select,
    Text,
});