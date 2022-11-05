import {Table,Button} from 'react-bootstrap';
function Body(){
    return(
        <main>
        <div id="main" style={{ marginLeft:'5%'}}>
            <article className="card"style={{ maxWidth:'95%' ,marginTop:'40px'}}>
                <h2>Welcome to Netlab Bookstore</h2>
                <p>Netlab Bookstore merupakan sebuah toko buku yang memiliki berbagai macam buku yang dapat kamu cari! Dapatkan buku Anda sekarang di Netlab Bookstore!
                </p>
            </article>
            <article className="card" style={{ maxWidth:'95%',marginTop:'40px',marginBottom:'40px'}}>
                <h2>Kelengkapan</h2>
                <p>menyediakan berbagai macam jenis buku hingga 120 gendre buku berbeda pastikan dirimu mendapatkan buku yang sesuai dengan kepribadian kamu dan kepuasanmu atas membaca adalah prioritas kami. Berikut beberapa rekomendasi dari kami</p>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Subtitle</td>
                            <td>ISBN13</td>
                            <td>Price</td>
                            <td>Image</td>
                            <td>Url</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Robotics, AI, and Humanity</td>
                            <td>Science, Ethics, and Policy</td>
                            <td>9783030541729</td>
                            <td>$59.99</td>
                            <td><img src={require('../../image/RoboAi.png')} alt="RoboAi" /></td>
                            <td>
                                <a href="https://itbook.store/books/9783030541729">
                                    <Button variant="dark">
                                        See More?
                                    </Button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Learning Go</td>
                            <td>An Idiomatic Approach to Real-World Go Programming</td>
                            <td>9781492077213</td>
                            <td>$35.88</td>
                            <td><img src={require('../../image/Learning Go.png')} alt={"RoboAi"} /></td>
                            <td>
                                <a href="https://itbook.store/books/9781492077213">
                                    <Button variant="dark">
                                        See More?
                                    </Button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Open Workbook of Cryptology</td>
                            <td>A project-based introduction to crypto in Python</td>
                            <td>1001656678502</td>
                            <td>$0.00</td>
                            <td><img src={require('../../image/Cryptology.png')} alt={"RoboAi"} /></td>
                            <td>
                                <a href="https://itbook.store/books/1001656678502">
                                    <Button variant="dark">
                                        See More?
                                    </Button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Debugging with GDB</td>
                            <td>The GNU Source-Level Debugger</td>
                            <td>9780983159230</td>
                            <td>$65.00</td>
                            <td><img src={require('../../image/debugging.png')} alt={"RoboAi"} /></td>
                            <td>
                                <a href="https://itbook.store/books/9780983159230">
                                    <Button variant="dark">
                                        See More?
                                    </Button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Microsoft Excel Inside Out</td>
                            <td>Office 2021 and Microsoft 365</td>
                            <td>9780137559534</td>
                            <td>$42.16</td>
                            <td><img src={require('../../image/excel.png')} alt={"RoboAi"} /></td>
                            <td>
                                <a href="https://itbook.store/books/9780137559534">
                                    <Button variant="dark">
                                        See More?
                                    </Button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </article>
        </div>
    </main>
    )
}

export default Body