import React, { Component, Fragment } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderCampsite({ campsite }) {
  return (
    <div className='col-md-5 m-1'>
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className='col-md-5 m-1'>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <p>
              {comment.text}
              <br />
              {comment.author},{' '}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          );
        })}
        <CommentForm />
      </div>
    );
  }
}

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      touched: {
        author: false
      }
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log('Current state is: ' + JSON.stringify(values));
    alert('Current state is: ' + JSON.stringify(values));
  }

  render() {
    return (
      <Fragment>
        <Button outline onClick={this.toggleModal}>
          <i className='fa fa-pencil fa-lg' /> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className='form-group'>
                <Label htmlFor='rating'>Rating</Label>
                <Control.select
                  model='.rating'
                  id='rating'
                  name='rating'
                  className='form-control'>
                  <option value='1'>1</option>
                  <option value='1'>1</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Control.select>
              </div>
              <div className='form-group'>
                <Label>Your Name</Label>
                <Control.text
                  model='.author'
                  id='author'
                  name='author'
                  placeholder='Your Name'
                  className='form-control'
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.author'
                  show='touched'
                  component='div'
                  messages={{
                    minLength: 'Must be at least 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </div>
              <div className='form-group'>
                <Label htmlFor='text'>Comment</Label>
                <Control.textarea
                  model='.text'
                  id='text'
                  name='text'
                  className='form-control'
                  rows='6'
                />
              </div>
              <div className='form-group'>
                <Button type='submit' color='primary'>
                  Submit
                </Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

function CampsiteInfo({ campsite, comments }) {
  if (campsite) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/directory'>Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderCampsite campsite={campsite} />
          <RenderComments comments={comments} />
        </div>
      </div>
    );
  }

  return <div />;
}

export default CampsiteInfo;
