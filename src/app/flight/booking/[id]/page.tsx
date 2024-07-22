import BookingDetails from '../../../../components/BookingDetails';

const BookingPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Booking Page</h1>
      <BookingDetails id={params.id} />
    </div>
  )
}

export default BookingPage;
