import * as React from "react"
import Layout from "../components/layout"
import * as style from "../styles/contact.module.scss"

const Contact = () => {
    return (
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>Contact</h1>
                    <p>ご意見・ご要望等お気軽にご連絡ください。</p>
                    <form>
                        <label htmlFor="name">お名前</label>
                        <input type="text" name="name" id="name" required/>
                        <label htmlFor="email"メールアドレス>メールアドレス</label>
                        <input type="email" name="email" id="email" required></input>
                        <label htmlFor="textarea">ご意見・ご要望等</label>
                        <textarea name="message" id="textarea" rows="10" required></textarea>

                        <button type="submit">送信</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact